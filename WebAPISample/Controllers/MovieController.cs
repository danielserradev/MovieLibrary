using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        ApplicationDbContext context;
        public MovieController()
        {
            context = new ApplicationDbContext();
        }
        // GET api/values
        public IEnumerable<Movie> Get()
        {
            // Retrieve all movies from db logic

            return context.Movies.ToList().AsEnumerable();
        }

        // GET api/values/5
        public string Get(int id)
        {
            // Retrieve movie by id from db logic
            var movie = context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            context.Movies.Add(value);
            // Create movie in db logic
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Movie value)
        {
            var movieToUpdate = context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            movieToUpdate.Title = value.Title;
            movieToUpdate.Director = value.Director;
            movieToUpdate.Genre = value.Genre;
            context.SaveChanges();

            // Update movie in db logic
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            // Delete movie from db logic
            var movieToDelete = context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            context.Movies.Remove(movieToDelete);
            context.SaveChanges();

            
        }
    }

}