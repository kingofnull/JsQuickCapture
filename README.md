# Js Quick Capture
A javascript (canvas) lib to capture urls to image. The library based on dom-to-image[https://github.com/tsayen/dom-to-image].

### How to use 
load the library :
``` 
<script src="../dist/quick-capture.min.js"></script>
```
Then call the capture function and pass url to it. You can notice when it finish by callback function.

Show in a image element:
```
quickCapture({
	url:'/test.html',
	callback:function(blob){
		var imageUrl = urlCreator.createObjectURL(blob);
		document.getElementById('image').src=imageUrl;
		console.log("Capture finished sucessfully!");
	}
});
```

Upload example using jquery ajax:

```
quickCapture({
	url:'/test.html',
	callback:function(blob){
		console.log("Capture finished sucessfully!");
		var fd = new FormData();
		fd.append('uploadfile', blob);
        $.ajax({
			type: 'POST',
			dataType:'JSON',
			url: '/cakephp/archive/Api/upload',
			data: fd,
			processData: false,
			contentType: false
		}).done(function (r) {
			console.log("Image uploaded sucessfully!");
		});
		
	}
});
```

### Limitations
The library usese iframe to capture url and try to inject capture script to it so the target frame shuold allow cross orgin access. for more information refer to:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options