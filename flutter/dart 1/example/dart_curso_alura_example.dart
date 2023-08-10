abstract class Alimento {
  String nome;
  double peso;
  int diasAposColheita;

  Alimento(this.nome, this.peso, this.diasAposColheita);

  void printAlimento() {
    print("$nome tem $peso gramas e $diasAposColheita dias após a colheita");
  }
}

abstract class Bolo {
  void assar();
  void servir();
}

class Fruta extends Alimento implements Bolo {
  bool? isMadura;

  Fruta(String nome, double peso, int diasAposColheita, {this.isMadura})
      : super(nome, peso, diasAposColheita);

  @override
  void assar() {
    print("primeiro assar a $nome");
  }

  @override
  void servir() {
    // TODO: implement servir
  }
}

void main() {
  String nome = 'abacate';
  double peso = 2.8;
  int diasAposColheita = 13;
  bool isMadura = true;

  Fruta abacate = Fruta(nome, peso, diasAposColheita, isMadura: isMadura);
  abacate.printAlimento();

  Fruta maca = Fruta("maca", 3.4, 4, isMadura: false);
  maca.printAlimento();

  Fruta banana = Fruta("banana", 3.4, 4);
  banana.printAlimento();

  banana.assar();
}
