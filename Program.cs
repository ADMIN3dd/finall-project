using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using Microsoft.EntityFrameworkCore;
using static Project.Utils;
using System.Text;
using System.Text.Json;
using System.Reflection.Metadata;
using System.Data.Common;
using UUIDNext;


namespace Project;

class Program
{
  static void Main()
  {
    /*───────────────────────────╮
    │ Creating the server object │
    ╰───────────────────────────*/
    var listener = new HttpListener();
    listener.Prefixes.Add("http://*:5000/");
    listener.Start();

    Console.WriteLine("Server started. Listening for requests...");
    Console.WriteLine("Main page on http://localhost:5000/website/index.html");

    /*─────────────────────────╮
    │ Processing HTTP requests │
    ╰─────────────────────────*/
    while (true)
    {
      /*─────────────────────────────────────╮
      │ Creating the database context object │
      ╰─────────────────────────────────────*/
      var databaseContext = new DatabaseContext();

      /*────────────────────────────╮
      │ Waiting for an HTTP request │
      ╰────────────────────────────*/
      var serverContext = listener.GetContext();

      try
      {
        /*────────────────────────╮
        │ Handeling file requests │
        ╰────────────────────────*/
        serverContext.ServeFiles();

        /*───────────────────────────╮
        │ Handeling custome requests │
        ╰───────────────────────────*/
        HandleRequests(serverContext, databaseContext);

        /*───────────────────────────────╮
        │ Saving changes to the database │
        ╰───────────────────────────────*/
        databaseContext.SaveChanges();

      }
      catch (Exception e)
      {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(e);
        Console.ResetColor();
      }

      /*───────────────────────────────────╮
      │ Sending the response to the client │
      ╰───────────────────────────────────*/
      serverContext.Response.Close();
    }
  }

  static void HandleRequests(HttpListenerContext serverContext, DatabaseContext databaseContext)
  {
    Record[] records1 = [];
    Record[] records2 = [];
    Record[] records3 = [];
    Record[] records4 = [];
    Record[] records5 = [];
    Record[] records6 = [];

    var request = serverContext.Request;
    var response = serverContext.Response;

    string absPath = request.Url!.AbsolutePath;
    //*1
    if (absPath == "/addRecord")
    {
      (string userId, int seconds, int level) = request.GetBody<(string, int, int)>();

      Record record = new Record(userId, seconds, level);

      databaseContext.Records.Add(record);
    }
    else if (absPath == "/getRecords")
    {
      // int level = request.GetBody<int>();
      var records = databaseContext.Records.Select(record => new
      {
        username = databaseContext.Users.First(user => user.Id == record.UserId)!.Username,
        seconds = record.Seconds,
        level = record.Level
      }).ToArray();

      response.Write(records);
    }

    else if (absPath == "/signUp")
    {
      (string username, string password) = request.GetBody<(string, string)>();
      var userId = Uuid.NewDatabaseFriendly(UUIDNext.Database.SQLite).ToString();
      User user = new User(username, password, userId);
      databaseContext.Users.Add(user);
      response.Write(userId);
    }

    else if (absPath == "/logIn")
    {
      (string username, string password) = request.GetBody<(string, string)>();

      User user = databaseContext.Users.First(
        u => u.Username == username && u.Password == password
      )!;

      response.Write(user.Id);
    }

  }


  public static string GetBody(HttpListenerRequest request)
  {


    return new StreamReader(request.InputStream).ReadToEnd();
  }


}

class DatabaseContext : DbContextWrapper
{
  public DbSet<User> Users { get; set; }
  public DbSet<Record> Records { get; set; }
  public DatabaseContext() : base("Database") { }
}

class User(string username, string password, string id)
{
  [Key]
  public string Id { get; set; } = id;

  public string Username { get; set; } = username;
  public string Password { get; set; } = password;
}

class Record(string userId, int seconds, int level)
{
  [Key]
  public int Id { get; set; }
  public string UserId { get; set; } = userId;
  public int Seconds { get; set; } = seconds;
  public int Level { get; set; } = level;

  [ForeignKey("UserId")]
  public User? User { get; set; }
}