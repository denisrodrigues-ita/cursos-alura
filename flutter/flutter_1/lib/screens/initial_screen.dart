import 'package:flutter/material.dart';
import '../components/task.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({super.key});

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {
  bool opacidade = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Container(),
        backgroundColor: Colors.blueAccent,
        title: const Text(
          'Tarefas',
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: AnimatedOpacity(
        opacity: opacidade ? 1 : 0,
        duration: const Duration(seconds: 1),
        child: ListView(
          children: const [
            Task(
                'Aprender Flutter',
                'https://pbs.twimg.com/media/Eu7m692XIAEvxxP?format=png&name=large',
                1),
            Task(
                'Aprender React',
                'https://media.istockphoto.com/id/1369385119/pt/foto/atom-nucleus-with-electrons.jpg?s=1024x1024&w=is&k=20&c=fxK7X_7shRZB0kpwOZ73L3pk66a38xwurdvD9AOg4cw=',
                2),
            Task(
                'Soltar Pipa',
                'https://media.istockphoto.com/id/517800730/pt/vetorial/colorido-papagaio-vector.jpg?s=1024x1024&w=is&k=20&c=m8njqCqxyLC4Q09bHCs6hnizuV3G1uvxytqiAO2I4Ko=',
                3),
            Task(
                'Jogar Futebol',
                'https://media.istockphoto.com/id/610241662/pt/foto/soccer-ball-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=hQGlNeogGXzYKsGuvXKnFpeoK_bAczBBfrNG4NtDjcw=',
                5),
            Task(
                'Jogar Video game',
                'https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg',
                1),
                SizedBox(height: 80)
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              opacidade = !opacidade;
            });
          },
          child: Icon(opacidade ? Icons.visibility : Icons.visibility_off)),
    );
  }
}
