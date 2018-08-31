using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LearningRouting.Models;

namespace LearningRouting.Controllers
{
    public class TeachersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AllTeachers()
        {
            return View();
        }

        public IActionResult Courses()
        {
            return View();
        }
    }
}
