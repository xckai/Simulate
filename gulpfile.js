var gulp = require('gulp');
var exec=require("child_process").exec;
var spawn = require('child_process').spawn;
const browserSync = require('browser-sync').create();
var less = require('gulp-less');
// var requirejsOptimize = require('gulp-requirejs-optimize')

gulp.task('start', function() {
  // exec("python -m http.server 8000",function(err,out,errstd){
  //   console.log(out);
  // })
 // var ls   = spawn("tsc",["-w"], {stdio : "inherit"});
  browserSync.init({server:{baseDir:"./",index:"dist/index.html"}});
  gulp.watch("./dist/**/*.js",function(e){
        browserSync.reload();
        console.log(e.path+"-------file changed")
        
    });
     gulp.src('./src/**/*.html',{base:"src"}).pipe(gulp.dest('./dist/'))
        gulp.watch("./src/**/*.html",function(e){
           gulp.src(e.path,{base:"src"}).pipe(gulp.dest('./dist/'))

            console.log(e.path+"-------file changed")
        })
  // gulp.watch("*.less",function(event){
  //   var file=event.path;
  //   if(event.type==="changed"|| event.type==="added"){
  //      var new_file=file.replace(/less$/,"css");
  //      exec("lessc "+file+"  "+new_file,function(err,out,errstd){
  //        console.log("less convert to css done");
  //      })
  //   }
   
  // })
});

gulp.task("copyHTML",function(){
        gulp.src('./src/**/*.html',{base:"src"}).pipe(gulp.dest('./dist/'))
        gulp.watch("./src/**/*.html",function(e){
           gulp.src(e.path,{base:"src"}).pipe(gulp.dest('./dist/'))
           browserSync.reload();
        })
        console.log("copying")
})

// gulp.task('tpibuddle', function () {
//       //  gulp.src('./KPIPanal/KPIPanal.js')
//       //   .pipe(browserify({
//       //     insertGlobals : true
//       //   }))
//       //   .pipe(gulp.dest('./dist/KPIPanal'));
//       //   gulp.src("./KPIPanal/*.less")
//       //       .pipe(less())
//       //       .pipe(gulp.dest("./dist/KPIPanal"))
     
  
//         // gulp.src("./TPIPanal/*.less")
//         //     .pipe(less())
//         //     .pipe(gulp.dest("./dist/TPIPanal"))
  
//     gulp.src('TPIPanal/TPIPanal.js')
//         .pipe(requirejsOptimize({
//         optimize:"none",
//         paths: {
//         // the left side is the module ID,
//         // the right side is the path to
//         // the jQuery file, relative to baseUrl.
//         // Also, the path should NOT include
//         // the '.js' file extension. This example
//         // is using jQuery 1.9.0 located at
//         // js/lib/jquery-1.9.0.js, relative to
//         // the HTML page.
//         d3: '../bower_components/d3/d3',
//         underscore:"../lib/underscore",
//         chartmanager:"../lib/comparechart"
//     }
//     }))
//         .pipe(gulp.dest('dist/TPIPanal'))

// });

// gulp.task("tpi",["kpibuddle"],function(){
//       var kpiserver=require('browser-sync').create();
//       kpiserver.init({server:{baseDir:"./",index:"test/tpi.html"}});
//       gulp.watch(["./KPIPanal/*.js","./test/tpi.html","./KPIPanal/*.less"],function(e){
//             gulp.start("kpibuddle")
//             setTimeout(function(){
//               kpiserver.reload()
//             },1000)
//             console.log(e.path+"-------file changed")
//         });
// })
// //////develop tpi panal  module AMD
// gulp.task("tpiDev",function(){
//      var kpiserver=require('browser-sync').create();
//       kpiserver.init({server:{baseDir:"./",index:"test/TPI.html"}});
//       gulp.watch("./TPIPanal/*.less",function(e){
//         gulp.src("./TPIPanal/*.less")
//             .pipe(less())
//             .pipe(gulp.dest("./TPIPanal"))
//       })
//       gulp.watch(["./TPIPanal/*.js","./test/TPI.html","./TPIPanal/*.css"],function(e){
           
//             kpiserver.reload()
//             console.log(e.path+"-------file changed")
//         });
// })
