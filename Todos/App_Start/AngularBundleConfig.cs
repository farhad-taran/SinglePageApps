using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Todos.App_Start
{
    public class AngularBundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                       "~/Scripts/angular/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularApp")
            .IncludeDirectory("~/AngularApp", "*.js", true));
        }
    }
}