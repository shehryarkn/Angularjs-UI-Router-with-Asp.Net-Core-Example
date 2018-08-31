using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LearningRouting.Models;

namespace LearningRouting.Controllers
{
    public class StudentsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AllStudents()
        {
            return View();
        }

        public IActionResult Result()
        {
            return View();
        }
    }
}
