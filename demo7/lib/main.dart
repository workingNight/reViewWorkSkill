import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello World')
        )
        body: Center (
          child: Text('hello world!')
        )
      ) //Scaffold 手脚架
    ); //MaterialApp
  }
}sd 

