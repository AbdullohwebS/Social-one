document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardContainer");

  const styles = `
        body {
            font-family: "Lexend Deca", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        #cardContainer {
            display: flex;
            border-radius: 10px;
            overflow: hidden; /* Barcha kartalarni bog'lash uchun */
        }
        .card {
            width: 250px;
            height: 340px;
            padding: 40px;
            color: white;
            text-align: start;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .card img {
            width: 64px;
            height: 40px;
        }
        h1 {
            font-family: "Big Shoulders Display", sans-serif;
            font-weight: 700;
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        p {
            font-size: 15px;
            line-height: 25px;
        }
        a {
            display: inline-block;
            margin-top: 15px;
            padding: 11px 15px;
            background: #F2F2F2;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            width: 90px;
        }
        .sedans { 
            background-color: #E28625; 
        }
        .suvs { 
            background-color: #006971; 
        }
        .luxury { 
            background-color: #004140; 
        }
        .sedans a {
            color: #E28625;
        }
        .suvs a {
            color: #006971;
        }
        .luxury a {
            color: #004140;
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const cars = [
    {
      type: "SEDANS",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      className: "sedans",
      imgSrc: "./img/car1.png",
    },
    {
      type: "SUVS",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      className: "suvs",
      imgSrc: "./img/car2.png",
    },
    {
      type: "LUXURY",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      className: "luxury",
      imgSrc: "./img/car3.png",
    },
  ];

  cars.forEach((car) => {
    const card = document.createElement("div");
    card.classList.add("card", car.className);

    const img = document.createElement("img");
    img.src = car.imgSrc;
    img.alt = car.type;

    const title = document.createElement("h1");
    title.textContent = car.type;

    const description = document.createElement("p");
    description.textContent = car.description;

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Learn More";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    container.appendChild(card);
  });
});
