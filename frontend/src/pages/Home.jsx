import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="text-center md:w-[80%] mx-auto my-20 mt-60">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="1000">
            Test pour mesurer votre stress
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium text-center text-gray-700" data-aos="fade-up" data-aos-duration="1000">
            Il nous arrive à tous de connaître des périodes de stress. Cependant, ce stress peut devenir trop important et peut nuire à notre vie quotidienne. Découvrez votre niveau de stress grâce à notre test en ligne.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="1000">
            Pourquoi le mesurer ?
          </h2>
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium text-center text-gray-700" data-aos="fade-up" data-aos-duration="1000">
            Le stress post-traumatique peut avoir des conséquences graves s'il n'est pas détecté et traité. En négligeant de tester le stress post-traumatique, il y a un risque de sous-estimer les symptômes, de retarder l'accès aux soins nécessaires, et d'aggraver les complications potentielles. Cela peut avoir un impact significatif sur la qualité de vie et rendre le rétablissement plus difficile.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Testez votre stress post-traumatique</h2>
          <p className="text-base mb-4">Cliquez sur le bouton ci-dessous pour démarrer le quiz.</p> <br />
          <Link to="/quiz"  className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 mx-2  rounded-full">
            Commencer le quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
