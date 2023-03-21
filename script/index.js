const data = [
  {
    image:
      "https://images.unsplash.com/photo-1675539252647-12e6eb164b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    desc: "a person standing on top of a tree stump",
  },
  {
    image:
      "https://images.unsplash.com/photo-1656880658905-16bfae123388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "a lamp on a pole",
  },
  {
    image:
      "https://images.unsplash.com/photo-1675725564198-a33fceec9433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "a person standing at the edge of a cliff near the ocean",
  },
  {
    image:
      "https://images.unsplash.com/photo-1675659999529-630a3febadfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "a woman in white dress walking down a path",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477282118108-2e2f8f6fbec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "woman sitting on a black weight bench",
  },
  {
    image:
      "https://images.unsplash.com/photo-1675795921263-0781cdbedb64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80",
    desc: "A person holding a pair of headphones in their hand",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444864878184-7a29cdcf4121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "The clock at the Tower of london, i suppose",
  },
  {
    image:
      "https://images.unsplash.com/photo-1679267382471-2ba3ece3d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    desc: "a view of the ceiling of a large building",
  },
];

const main = document.querySelector("#root");

const cards = data
  .map(({ image, desc }, index) => {
    return `      <div class="card" key=${index}>
       <div class="card__image">
         <img
           src="${image}"
           alt="${desc}"
         />
         <div class="card-info">
           <p class="card-info__title">${desc}</p>
         </div>
       </div>
     </div>`;
  })
  .join("");

main.innerHTML = cards;
