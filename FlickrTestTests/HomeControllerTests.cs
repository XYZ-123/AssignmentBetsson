using FlickrTest.Controllers;
using FlickrTest.Repository;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Xunit;

namespace FlickrTestTests
{
    public class HomeControllerTests
    {
        private readonly Mock<IRepository> mockedRep;
        private readonly HomeController sut;

        public HomeControllerTests()
        {
            mockedRep = new Mock<IRepository>();
            sut = new HomeController(mockedRep.Object);
        }

        [Fact]
        public void Index_ShouldReturn_View()
        {
            //Arrange
            //Act
            var result = sut.Index();
            var actual = result as ViewResult;

            //Assert
            Assert.NotNull(actual);
        }
        [Fact]
        public void GetImages_ShouldReturn_Json()
        {
            //Arrange
            mockedRep.Setup(x => x.GetImagesByTags(It.IsAny<string>())).Returns(new List<FlickrTest.Models.FlickrImage>());
            
            //Act
            var result = sut.GetImages("test");
            var actual = result as JsonResult;

            //Assert
            Assert.NotNull(actual);
            Assert.Equal(JsonRequestBehavior.DenyGet, actual.JsonRequestBehavior);
        }
    }
}
