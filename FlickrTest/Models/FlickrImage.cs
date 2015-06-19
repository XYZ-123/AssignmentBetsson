namespace FlickrTest.Models
{
    /// <summary>
    /// The Flickr image model
    /// </summary>
    public class FlickrImage
    {
        /// <summary>
        /// The title
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// The image url
        /// </summary>
        public string ImageUrl { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether taken from cache.
        /// </summary>
        /// <value>
        ///   <c>true</c> if taken from cache; otherwise, <c>false</c>.
        /// </value>
        public Source Source { get; set; }
    }
}