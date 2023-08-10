class SenderIdInvalidException implements Exception {
  static const String report = "SenderIdInvalidException";
  String idSender;

  SenderIdInvalidException({required this.idSender});

  @override
  String toString() {
    return "$report\nID Sender: $idSender";
  }
}

class ReceiverIdInvalidException implements Exception {
  static const String report = "ReceiverIdInvalidException";
  String idReceiver;

  ReceiverIdInvalidException({required this.idReceiver});

  @override
  String toString() {
    return "$report\nID receiver: $idReceiver";
  }
}

class SenderNotAuthenticatedException implements Exception {
  static const String report = "SenderNotAuthenticatedException";
  String idSender;

  SenderNotAuthenticatedException({required this.idSender});

  @override
  String toString() {
    return "$report\n$idSender não autenticado.";
  }
}

class SenderBalanceLowerThanAmountException implements Exception {
  static const String report = "SenderBalanceLowerThanAmountException";
  String idSender;
  double balance;
  double amount;

  SenderBalanceLowerThanAmountException(
      {required this.balance, required this.idSender, required this.amount});

  @override
  String toString() {
    return "$report\nId Sender: $idSender\nSender balance: $balance\nBalance: $balance";
  }
}
