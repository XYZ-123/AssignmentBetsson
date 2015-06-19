using System.Collections.Generic;
using FlickrTest.Models;

namespace FlickrTest.Repository
{
    /// <summary>
    /// The Repository interface
    /// </summary>
    public interface IRepository
    {
        /// <summary>
        /// Gets the images by tags.
        /// </summary>
        /// <param name="tags">The tags.</param>
        /// <returns>List of FlickrImage objects.</returns>
        List<FlickrImage> GetImagesByTags(string tags);
    }
}
