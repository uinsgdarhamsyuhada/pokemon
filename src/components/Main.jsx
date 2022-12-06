import React from "react";
import Pokemon from "./Pokemon";
import HubungiKamiForm from "./HubungiKamiForm";

class Main extends React.Component {
    render() {
        const listPokemon = [
            {
                name: "Pikachu",
                image: "https://www.freeiconspng.com/uploads/pikachu-png-icon-7.png",
                introduction: "Pikachu (Japanese: ピカチュウ Pikachu) merupakan pokemon jenis tikus berwarna kuning dengan ekor menyerupai logo aliran listrik. Yup, itulah kekuatannya serta mampu berlari cepat dan melunakkan pipi hingga lebar. Namun, ia juga memiliki kelemahan, yakni dengan tanah."
            },
            {
                name: "Bulbasaur",
                image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD.png",
                introduction: "Bulbasaur (Japanese: フシギダネ Fushigidane) nyatanya bukan pokemon berjenis hewan, melainkan tumbuhan. Yup, ia terbuat dari bibit tanaman dengan berat mencapai 6,9 kg dan tinggi sekitar 0,7 m. Kemampuannya adalah menyerang lawan dengan daun serta racun."
            },
            {
                name: "Blastoise",
                image: "https://www.pngmart.com/files/22/Blastoise-Pokemon-PNG-Clipart.png",
                introduction: "Blastoise (Japanese: カメックス Kamex) Sesuai namanya, pokemon ini berjenis kura-kura dengan warna cenderung biru. Tempurung yang ada pada tubuhnya tidak hanya berfungsi untuk pertahanan diri, namun juga meminimalisir gesekan dalam air. Jadi, ia bisa berenang dengan cepat."
            },
            {
                name: "Charmander",
                image: "https://www.pngmart.com/files/22/Charmander-Pokemon-PNG-Photos.png",
                introduction: "Charmander (Japanese: ヒトカゲ Hitokage) adalah pokemon kadal atau naga yang memiliki warna cenderung oranye. Kekuatan utamanya adalah semburan yang mengobarkan api. Ia sangat senang dengan benda apapun yang bersifat panas."
            },
            {
                name: "Eevee",
                image: "https://www.pngmart.com/files/22/Eevee-Pokemon-PNG-File.png",
                introduction: "Eevee (Japanese: イーブイ Eievui) Eeve merupakan pokemon berwarna cokelat dan berbulu lebat di bagian lehernya. Berat tubuhnya mencapai 6,5 kg, namun tingginya hanya 0,3 m. Imut banget, ya! Ia bukan petarung dan hanya bisa beradaptasi dengan lingkungan sekitarnya serta melarikan diri."
            }
        ]
        return (
            <div className="main-wrapper">
                <div className="main">
                    <div className="hello-container">
                        <h1>Hello, Pokemon Hunter</h1>
                        <h2>Selamat datang di dunia Pokemon</h2>
                    </div>
                    <div className="pokemon-container">
                        <h3>List Pokemon</h3>
                        <div className="list-card">
                            {listPokemon.map((pokemon) => {
                                return (
                                    <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction} />
                                );
                            })}
                        </div>
                    </div>
                    {/* HubungiKamiForm.jsx */}
                    <div className="hubungikami-container">
                        <h3>Hubungi Kami</h3>
                        <HubungiKamiForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;