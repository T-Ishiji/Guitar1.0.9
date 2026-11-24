// v1.0.9
// 発音: P0=0 または P0=1023 のときのみ
// 停止帯: 1～489 / 534～1022
// 中央: 490～533
// その他: 中央120ms判定、1.5秒サステイン、約2秒フェード、再ストロークを維持
guitarchord.setDelay(150)
guitarchord.assignChord(guitarchord.ChordButton.NoButton, guitarchord.Chord.C)
guitarchord.assignChord(guitarchord.ChordButton.Button1, guitarchord.Chord.G)
