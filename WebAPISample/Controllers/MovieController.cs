using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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
        public async Task<IHttpActionResult> Get()
        {
            // Retrieve all movies from db logic
            var movies = context.Movies.ToList();
            return Ok(movies);
        }
        
        // GET api/values/5
        public async Task<IHttpActionResult> Get(int id)
        {
            // Retrieve movie by id from db logic
            var movie = context.Movies.Find(id);
            if(movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }
        
        // POST api/values
        public async Task<IHttpActionResult> Post([FromBody]Movie value)
        {
            context.Movies.Add(value);
            var movie = await context.SaveChangesAsync();


            // Create movie in db logic
            return Ok(value);
        }

        // PUT api/values/5
        public async Task<IHttpActionResult> Put(int id, [FromBody]Movie value)
        {
            var movieToEdit = context.Movies.Find(value.MovieId);

            movieToEdit.Director = value.Director;
            movieToEdit.Title = value.Title;
            movieToEdit.Genre = value.Genre;

            var movie = await context.SaveChangesAsync();


            
            return Ok(movie);
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