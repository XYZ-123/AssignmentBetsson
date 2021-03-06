﻿using System.Web.Mvc;
using FlickrTest.Repository;

namespace FlickrTest.Controllers
{
    /// <summary>
    /// The home controller
    /// </summary>
    public class HomeController : Controller
    {
        private readonly IRepository repository;

        public HomeController(IRepository repository)
        {
            this.repository = repository;
        }
        /// <summary>
        /// GET: /Home/
        /// </summary>
        /// <returns>Returns an action result containing the view</returns>
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Gets images from repository
        /// </summary>
        /// <param name="tags">Tags that should be searched for in the repository</param>
        /// <returns>A Json object containing the images from the repository</returns>
        [HttpPost]
        public ActionResult GetImages(string tags) 
        { 
            return Json(repository.GetImagesByTags(tags), JsonRequestBehavior.DenyGet);
        }

    }
}
