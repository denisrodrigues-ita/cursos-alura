void main() {
  // Future myFuture = Future(() {
  //   print('Going back to the future');
  //   return 21;
  // }).then((value) => print('The value is $value'));

  Future<int> myFutureFunc() async {
    print('I have a future function');
    await Future.delayed(Duration(seconds: 5));
    // throw Exception();
    return 12;
  }

  myFutureFunc()
      .then((value) => print('my return is $value'))
      .onError((error, stackTrace) => print('An error ocurred'))
      .whenComplete(() => print('finished'));

  print('Done with main');
}
