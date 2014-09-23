Simple jQuery-based XML parser for client side JavaScript
==========

As HTML5-based applications become more and more complex, there is a need to extend the JavaScript language with rich features.

This lightweight XML parser provides straightforward parsing and marshalling for well formed XML documents using jQuery. The usage is almost the same as when dealing with HTML DOM.

The script defines the XMLParser object, which provides the parse and stringify methods, just like the JavaScript JSON object.

##Sample usage

Suppose you have the following XML document.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<team>
  <member>
    <name>Oswaldo</name>
    <language>JavaScript</language>
  </member>
  <member>
    <name>Irving</name>
    <language>Scala</language>
  </member>
</team>
```

Use parse method to get a jQuery representation.

```javascript
var $xml = XMLParser.parse(xml);
```

Edit some data.

```javascript
$('member[name=Oswaldo]', $xml).attr('language', 'C++');
```

Add elements.

```javascript
$('team', $xml).append('<member><name>Andree</name><language>Java</language></member>');
```

Output to XML string.

```javascript
xml = XMLParser.stringify($xml);
```

Result.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<team>
  <member>
    <name>Oswaldo</name>
    <language>C++</language>
  </member>
  <member>
    <name>Irving</name>
    <language>Scala</language>
  </member>
  <member>
    <name>Andree</name>
    <language>Java</language>
  </member>
</team>
```
