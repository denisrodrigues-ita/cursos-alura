import 'package:flutter/material.dart';

class Difficulty extends StatelessWidget {
  final int difficulytLevel;

  const Difficulty({
    required this.difficulytLevel,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(Icons.star,
            size: 15,
            color: difficulytLevel >= 1
                ? Colors.blue
                : Colors.blue[100]),
        Icon(Icons.star,
            size: 15,
            color: difficulytLevel >= 2
                ? Colors.blue
                : Colors.blue[100]),
        Icon(Icons.star,
            size: 15,
            color: difficulytLevel >= 3
                ? Colors.blue
                : Colors.blue[100]),
        Icon(Icons.star,
            size: 15,
            color: difficulytLevel >= 4
                ? Colors.blue
                : Colors.blue[100]),
        Icon(Icons.star,
            size: 15,
            color: difficulytLevel >= 5
                ? Colors.blue
                : Colors.blue[100])
      ],
    );
  }
}
