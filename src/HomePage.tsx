import React from 'react';
import Layout from './components/Layout';
import FeatureCard from './components/FeatureCard';
import RegisterButton from './components/RegisterButton';
import InfoSection from './components/InfoSection';
import HowItWorks from './components/HowItWorks';

const features = [
  {
    title: "Alertas divertidas",
    description: "¡Cada alerta es una forma entretenida de aprender y estar informado! Recibe notificaciones sobre asteroides de forma divertida. Mantente al tanto de lo que sucede en el espacio, sin preocupaciones"
  },
  {
    title: "Aprende jugando",
    description: "Descubre el espacio mientras te diviertes. Responde quizzes, completa desafíos y gana puntos que podrás canjear por recompensas"
  },
  {
    title: "Canjea premios reales",
    description: "Acumula puntos mientras aprendes y participa en divertidos juegos. Cuando hayas reunido suficientes puntos, podrás canjearlos por increíbles premios reales"
  }
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center self-center mt-20 w-full max-w-[1123px] max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
        <RegisterButton />
        <section className="self-start mt-16 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-semibold tracking-tight leading-none text-slate-900">
            La ciencia de las galaxia accesible
          </h2>
          <p className="self-start mt-5 text-lg leading-7 text-zinc-900 max-md:max-w-full">
            Entender el cosmos nos ayuda a cuidar mejor nuestro mundo. Al explorar el espacio, aprendemos sobre los asteroides que podrían afectarnos, los recursos que podríamos aprovechar y cómo cuidar mejor nuestro ambiente aquí en la Tierra
          </p>
        </section>
        <InfoSection
          title="Todos los días una notificación divertida que te informa sobre asteroides y te invita a jugar y aprender."
          description="Recibe una notificación diaria con retos exclusivos. Tienes una hora para completarlos, ganar puntos y canjearlos en la tienda. ¡Compite con otros astroaddictos en la clasificación global!"
          imagePosition="left"
        />
        <RegisterButton />
        <InfoSection
          title="Enfréntate a retos galácticos cada día, gana puntos y escala posiciones en la tabla de clasificaciones"
          description="Tienes solo una hora para completar los retos del día y sumar la mayor cantidad de puntos posible. ¿Podrás llegar a la cima y ser coronado como el mayor astroadicto? ¡Demuestra que conoces el universo mejor que nadie y conquista el espacio!"
          imagePosition="right"
        />
        <RegisterButton />
        <InfoSection
          title="Canjea tus Puntos y Llévate la Gloria"
          description="Cada vez que superes un reto galáctico, acumularás puntos que podrás canjear en nuestra tienda espacial por increíbles recompensas. Desde merchandising exclusivo hasta coleccionables únicos, ¡tu conocimiento del cosmos tiene premio!"
          imagePosition="left"
        />
        <RegisterButton />
        <HowItWorks />
        <RegisterButton />
      </div>
    </Layout>
  );
};

export default HomePage;