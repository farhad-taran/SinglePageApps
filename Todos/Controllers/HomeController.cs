#region Using References

using System.Web.Mvc;

#endregion

namespace Todos.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Index",
                                    "Durandal");
        }
    }
}