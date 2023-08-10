import 'package:flutter/material.dart';

import 'difficulty_level.dart';

class Task extends StatefulWidget {
  final String task;
  final String url;
  final int difficultyLevel;
  const Task(this.task, this.url, this.difficultyLevel, {super.key});

  @override
  State<Task> createState() => _TaskState();
}

class _TaskState extends State<Task> {
  int nivel = 0;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8),
      child: Stack(children: [
        Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            color: Colors.blueAccent,
          ),
          height: 140,
        ),
        Column(
          children: [
            Container(
                color: Colors.white,
                height: 100,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: Colors.grey,
                        ),
                        width: 72,
                        height: 100,
                        child: ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: Image.network(widget.url,
                                fit: BoxFit.cover))),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 200,
                          child: Text(
                            widget.task,
                            style: const TextStyle(fontSize: 20),
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                        Difficulty(difficulytLevel: widget.difficultyLevel)
                      ],
                    ),
                    Column(
                      children: [
                        ElevatedButton(
                            onPressed: () {
                              setState(() {
                                if (nivel >= 10) return;
                                nivel++;
                              });
                            },
                            child: const Icon(Icons.arrow_drop_up)),
                        ElevatedButton(
                            onPressed: () {
                              setState(() {
                                if (nivel <= 0) return;
                                nivel--;
                              });
                            },
                            child: const Icon(Icons.arrow_drop_down))
                      ],
                    ),
                  ],
                )),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: const EdgeInsets.all(8),
                  child: SizedBox(
                      width: 200,
                      child: LinearProgressIndicator(
                        color: Colors.amber,
                        value: nivel / 10,
                      )),
                ),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Text('nível: $nivel',
                      style: const TextStyle(color: Colors.white, fontSize: 16)),
                ),
              ],
            )
          ],
        ),
      ]),
    );
  }
}
