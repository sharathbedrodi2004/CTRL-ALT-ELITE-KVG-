const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Offbeat destinations data
const destinations = [
  {
    name: "Valley of Flowers, India",
    experience: "nature",
    budget: 40,
    climate: "temperate",
    description:
      "A pristine national park famous for its vibrant alpine flowers and local community treks. Stay in eco-friendly guesthouses managed by villagers, supporting conservation efforts.",
    tags: ["Eco-friendly", "Community-led", "Nature"]
  },
  {
    name: "Svaneti, Georgia",
    experience: "culture",
    budget: 50,
    climate: "cold",
    description:
      "A remote mountainous region rich with medieval towers and vibrant local traditions. Experience home stays with a Svan family and enjoy authentic mountain cuisine.",
    tags: ["Local Culture", "Community-led", "Heritage"]
  },
  {
    name: "San Juan Mountains, Colorado, USA",
    experience: "adventure",
    budget: 100,
    climate: "temperate",
    description:
      "Hidden mountain trails perfect for trekking, mountain biking, and rafting. Choose eco-lodges that partner with local guides to provide sustainable outdoor experiences.",
    tags: ["Adventure", "Eco-lodges", "Local Guides"]
  },
  {
    name: "El Nido, Palawan, Philippines",
    experience: "relaxation",
    budget: 80,
    climate: "tropical",
    description:
      "Secluded beaches and crystal-clear waters offering yoga retreats and community-led marine conservation activities. Stay at eco-resorts with zero plastic policies.",
    tags: ["Eco-resort", "Marine Conservation", "Relaxation"]
  },
  {
    name: "Tsum Valley, Nepal",
    experience: "nature",
    budget: 60,
    climate: "cold",
    description:
      "A hidden Himalayan valley where you can learn about Buddhist culture and conservation efforts. Stay in community lodges run by locals promoting sustainable tourism.",
    tags: ["Nature", "Community Lodges", "Sustainable Tourism"]
  },
  {
    name: "Wayanad, Kerala, India",
    experience: "culture",
    budget: 45,
    climate: "tropical",
    description:
      "Lush green landscapes with spice plantations and tribal villages. Enjoy homestays with local families and guided eco-tours that benefit the local economy.",
    tags: ["Culture", "Eco-tours", "Homestay"]
  },
  {
    name: "Rotorua, New Zealand",
    experience: "relaxation",
    budget: 120,
    climate: "temperate",
    description:
      "Famous for geothermal hot springs, Maori culture, and eco-friendly spas. Experience community-led cultural workshops and bath in mineral-rich pools.",
    tags: ["Spa", "Maori Culture", "Eco-friendly"]
  },
  {
    name: "Azores, Portugal",
    experience: "adventure",
    budget: 110,
    climate: "temperate",
    description:
      "Remote Atlantic islands offering whale watching, hiking, and volcanic hot springs. Eco-lodges partner with locals to ensure sustainable exploration.",
    tags: ["Adventure", "Eco-lodges", "Whale Watching"]
  },
  {
    name: "Colchagua Valley, Chile",
    experience: "relaxation",
    budget: 90,
    climate: "temperate",
    description:
      "Winery region with boutique vineyards and eco-friendly tours. Visit family-run wineries and stay at countryside eco-estates promoting slow tourism.",
    tags: ["Wine", "Eco-tourism", "Community"]
  },
  {
    name: "Lombok, Indonesia",
    experience: "adventure",
    budget: 70,
    climate: "tropical",
    description:
      "Beaches and volcano treks with authentic Sasak village experiences. Eco-resorts support coral reef conservation and cultural preservation.",
    tags: ["Adventure", "Eco-resorts", "Culture"]
  }
];

// Serve frontend static file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'travel-planner.html'));
});

// API endpoint to get filtered destinations
app.post('/api/destinations', (req, res) => {
  const { experience, budget, climate } = req.body;

  if (!experience || !budget || !climate) {
    return res.status(400).json({ error: "Missing experience, budget, or climate in request body." });
  }

  const filtered = destinations.filter(dest => {
    return dest.experience === experience &&
           dest.climate === climate &&
           dest.budget <= budget;const express = require('express');
           const cors = require('cors');
           const path = require('path');
           
           const app = express();
           const PORT = process.env.PORT || 3000;
           
           app.use(cors());
           app.use(express.json());
           
           // Improved destinations data with image URLs
           const destinations = [
             {
               name: "Valley of Flowers, India",
               experience: "nature",
               budget: 40,
               climate: "temperate",
               description:
                 "A pristine national park famous for its vibrant alpine flowers and local community treks. Stay in eco-friendly guesthouses managed by villagers, supporting conservation efforts.",
               tags: ["Eco-friendly", "Community-led", "Nature"],
               image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Svaneti, Georgia",
               experience: "culture",
               budget: 50,
               climate: "cold",
               description:
                 "A remote mountainous region rich with medieval towers and vibrant local traditions. Experience home stays with a Svan family and enjoy authentic mountain cuisine.",
               tags: ["Local Culture", "Community-led", "Heritage"],
               image: "https://images.unsplash.com/photo-1549887535-a57d18f7eab9?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "San Juan Mountains, Colorado, USA",
               experience: "adventure",
               budget: 100,
               climate: "temperate",
               description:
                 "Hidden mountain trails perfect for trekking, mountain biking, and rafting. Choose eco-lodges that partner with local guides to provide sustainable outdoor experiences.",
               tags: ["Adventure", "Eco-lodges", "Local Guides"],
               image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "El Nido, Palawan, Philippines",
               experience: "relaxation",
               budget: 80,
               climate: "tropical",
               description:
                 "Secluded beaches and crystal-clear waters offering yoga retreats and community-led marine conservation activities. Stay at eco-resorts with zero plastic policies.",
               tags: ["Eco-resort", "Marine Conservation", "Relaxation"],
               image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Tsum Valley, Nepal",
               experience: "nature",
               budget: 60,
               climate: "cold",
               description:
                 "A hidden Himalayan valley where you can learn about Buddhist culture and conservation efforts. Stay in community lodges run by locals promoting sustainable tourism.",
               tags: ["Nature", "Community Lodges", "Sustainable Tourism"],
               image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Wayanad, Kerala, India",
               experience: "culture",
               budget: 45,
               climate: "tropical",
               description:
                 "Lush green landscapes with spice plantations and tribal villages. Enjoy homestays with local families and guided eco-tours that benefit the local economy.",
               tags: ["Culture", "Eco-tours", "Homestay"],
               image: "https://images.unsplash.com/photo-1528308640920-fd3ebcc3f1c7?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Rotorua, New Zealand",
               experience: "relaxation",
               budget: 120,
               climate: "temperate",
               description:
                 "Famous for geothermal hot springs, Maori culture, and eco-friendly spas. Experience community-led cultural workshops and bath in mineral-rich pools.",
               tags: ["Spa", "Maori Culture", "Eco-friendly"],
               image: "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Azores, Portugal",
               experience: "adventure",
               budget: 110,
               climate: "temperate",
               description:
                 "Remote Atlantic islands offering whale watching, hiking, and volcanic hot springs. Eco-lodges partner with locals to ensure sustainable exploration.",
               tags: ["Adventure", "Eco-lodges", "Whale Watching"],
               image: "https://images.unsplash.com/photo-1486308510493-cb66356f8777?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Colchagua Valley, Chile",
               experience: "relaxation",
               budget: 90,
               climate: "temperate",
               description:
                 "Winery region with boutique vineyards and eco-friendly tours. Visit family-run wineries and stay at countryside eco-estates promoting slow tourism.",
               tags: ["Wine", "Eco-tourism", "Community"],
               image: "https://images.unsplash.com/photo-1465156799767-5a5975e0e25e?auto=format&fit=crop&w=800&q=60"
             },
             {
               name: "Lombok, Indonesia",
               experience: "adventure",
               budget: 70,
               climate: "tropical",
               description:
                 "Beaches and volcano treks with authentic Sasak village experiences. Eco-resorts support coral reef conservation and cultural preservation.",
               tags: ["Adventure", "Eco-resorts", "Culture"],
               image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
             }
           ];
           
           function sanitizeName(name) {
             return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
           }
           
           // Serve frontend static file
           app.get('/', (req, res) => {
             res.sendFile(path.join(__dirname, 'travel-planner.html'));
           });
           
           // API endpoint to get filtered destinations
           app.post('/api/destinations', (req, res) => {
             const { experience, budget, climate } = req.body;
           
             if (!experience || !budget || !climate) {
               return res.status(400).json({ error: "Missing experience, budget, or climate in request body." });
             }
           
             const filtered = destinations.filter(dest => {
               return dest.experience === experience &&
                      dest.climate === climate &&
                      dest.budget <= budget;
             });
           
             res.json({ results: filtered });
           });
           
           // Destination detail page by sanitized name
           app.get('/destination/:slug', (req, res) => {
             const slug = req.params.slug;
           
             const destination = destinations.find(dest => sanitizeName(dest.name) === slug);
           
             if (!destination) {
               return res.status(404).send('<h1>Destination Not Found</h1><p>The requested destination does not exist.</p>');
             }
           
             // Construct the destination detail HTML page
             const tagsHtml = destination.tags.map(tag => `<span style="background:#71b280;color:#fff;padding:4px 10px;margin-right:6px;border-radius:12px;font-size:0.85rem;">${tag}</span>`).join('');
           
             const html = `
               <!DOCTYPE html>
               <html lang="en">
               <head>
                 <meta charset="UTF-8" />
                 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                 <title>${destination.name} - Details</title>
                 <style>
                   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
                   body {
                     margin:0; padding:1rem;
                     font-family: 'Poppins', sans-serif;
                     background: #f3f9f7;
                     color: #2c3e50;
                     max-width: 600px;
                     margin-left: auto;
                     margin-right: auto;
                   }
                   h1 {
                     font-weight: 600;
                     font-size: 2rem;
                     margin-bottom: 0.2rem;
                     color: #134e5e;
                   }
                   .tags {
                     margin-bottom: 1rem;
                   }
                   p.description {
                     font-size: 1.1rem;
                     line-height: 1.5;
                     margin-bottom: 1.5rem;
                   }
                   img {
                     width: 100%;
                     border-radius: 16px;
                     box-shadow: 0 6px 18px rgba(0,0,0,0.12);
                     margin-bottom: 1.5rem;
                   }
                   a.back-link {
                     display: inline-block;
                     margin-bottom: 2rem;
                     color: #3498db;
                     font-weight: 600;
                     text-decoration: none;
                     font-size: 1rem;
                     border: 2px solid #3498db;
                     padding: 0.3rem 1rem;
                     border-radius: 12px;
                     transition: background-color 0.3s ease;
                   }
                   a.back-link:hover {
                     background-color: #3498db;
                     color: #fff;
                   }
                   footer {
                     text-align: center;
                     font-size: 0.9rem;
                     color: #888;
                     margin-top: 2rem;
                     padding-bottom: 1rem;
                   }
                 </style>
               </head>
               <body>
                 <a href="/" class="back-link">&larr; Back to Planner</a>
                 <h1>${destination.name}</h1>
                 <div class="tags">${tagsHtml}</div>
                 <img src="${destination.image}" alt="Image of ${destination.name}" />
                 <p class="description">${destination.description}</p>
                 <footer>Promoting local tourism & eco-friendly stays.</footer>
               </body>
               </html>
             `;
           
             res.send(html);
           });
           
           app.listen(PORT, () => {
             console.log(\`Travel planner backend running on http://localhost:\${PORT}\`);
           });
           
           
  });

  res.json({ results: filtered });
});

app.listen(PORT, () => {
  console.log(`Travel planner backend running on http://localhost:${PORT}`);
});

