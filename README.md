# jframe

jQuery plugin to load an iframe with POST data

Can be usefull to load a specific user view into an iframe

## Dependencies

Require jQuery >= 1.5.0

## Install

`bower install 4k1r0-jframe`

## Usage

```html
<div id="myIframeWrapper"></div>
<script>
    $('#myIframeWrapper').jframe({
        url : "http://example.com",
        data:{
            user_id: 1234,
            articles_id: [13,456,789],
        }
    });
</script>
```

## Configuration

Key | Type | Description
------------ | ------------- | -------------
url | string | where send POST data, usually set in `<iframe src="url">`
iframe | object | every `<iframe>` attr needed can be set here
data | object | POST data to send
success | callback | method called when the iframe is loaded
