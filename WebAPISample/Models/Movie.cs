using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPISample.Models
{
    public class Movie
    {
        //hello
        public int MovieId { get; set; }

        [Display(Name = "Movie Title")]
        public string Title { get; set; }

        [Display(Name = "Movie Director")]
        public string Director { get; set; }

        [Display(Name = "Movie Genre")]
        public string Genre { get; set; }
    }
}