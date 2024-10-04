// import React, { Component } from 'react';
// import Phaser from 'phaser';

// class PhaserGame extends Component {
//   componentDidMount() {
//     // Inisialisasi permainan Phaser saat komponen dimuat
//     const config = {
//       type: Phaser.AUTO,
//       width: 1000,
//       height: 600,
//       scene: {
//         preload: this.preload,
//         create: this.create,
//         update: this.update,
//       },
//     };

//     this.game = new Phaser.Game(config);
//   }

//   preload() {
//     // Metode untuk memuat sumber daya permainan, seperti gambar, suara, dll.
//     // this.load.image('logo', '../assets/assetsGame/btn_play.png');
//     // this.load.spritesheet('aliens', '../assets/assetsGame/chara.png', { frameWidth: 192, frameHeight: 160 });
//   }

//   create() {
//     // Metode untuk membuat elemen permainan saat permainan dimulai
//     // this.add.image(400, 300, 'logo');
//     const graphics = this.add.graphics();

//     graphics.fillStyle(0xffff00, 1);
//     graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
//     graphics.fillPath();

//     graphics.setInteractive(new Phaser.Geom.Circle(400, 300, 200), Phaser.Geom.Circle.Contains);

//     graphics.on('pointerover', () =>
//     {

//         graphics.clear();
//         graphics.fillStyle(0xff0000, 1);
//         graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
//         graphics.fillPath();

//     });

//     graphics.on('pointerout', () =>
//     {

//         graphics.clear();
//         graphics.fillStyle(0xffff00, 1);
//         graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
//         graphics.fillPath();

//     });
//   }

//   update() {
//     // Metode untuk mengupdate logika permainan dalam loop permainan
//   }

//   componentWillUnmount() {
//     // Membersihkan sumber daya permainan saat komponen dihapus
//     this.game.destroy(true);
//   }

//   render() {
//     return <div id="phaser-container" />;
//   }
// }

// export default PhaserGame;
