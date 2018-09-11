const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then( () => {
      return knex('users').insert([
        {
          id: 1,
          user_type: 'organizer',
          first_name: 'Nick',
          last_name: 'Ellingson',
          user_name: 'nick.ellingson',
          email: 'nick.ellingson@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://media.licdn.com/dms/image/C4D03AQEIVGkLqZ627A/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=cVYJrsy9OeOWLFyEf0qT3e3MEyj8g3MoQmG9xs8Aj40',
          title: 'Startup Ambassador',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'www.linkedin.com/in/nickellingson',
          website_url: 'nickellingson.com',
          can_create_session: true
        },
        {
          id: 2,
          user_type: 'organizer',
          first_name: 'Katie',
          last_name: 'Rice',
          user_name: 'katie.rice',
          email: 'katie.rice@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://www.allianceofangels.com/wp-content/uploads/2016/04/Katie-500x500.jpg',
          title: 'Membership Manager',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'www.linkedin.com/in/katierice',
          website_url: 'google.com',
          can_create_session: true
        },
        {
          id: 3,
          user_type: 'host',
          first_name: 'Audie',
          last_name: ' Koss',
          user_name: 'audie.koss',
          email: 'audie.koss@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=PastelPink&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Black&graphicType=Resist&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=DarkBrown',
          title: 'Investor',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 4,
          user_type: 'host',
          first_name: 'Faustino',
          last_name: 'King',
          user_name: 'faus.king',
          email: 'faus.king@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Brown',
          title: 'CFO',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 5,
          user_type: 'host',
          first_name: 'Katelin',
          last_name: ' Mertz',
          user_name: 'ketelin.mertz',
          email: 'ketelin.mertz@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Round&hairColor=Red&facialHairType=Blank&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=Blue01&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale',
          title: 'Executive',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 6,
          user_type: 'member',
          first_name: 'Telly ',
          last_name: 'Rohan',
          user_name: 'telly.rohan',
          email: 'telly.rohan@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Side&eyebrowType=SadConcernedNatural&mouthType=Sad&skinColor=Black',
          title: 'Founder',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 7,
          user_type: 'member',
          first_name: 'Rocky',
          last_name: 'Schuster',
          user_name: 'rocky.shuster',
          email: 'rocky.shuster@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Prescription01&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Black&graphicType=Resist&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Pale',
          title: 'New Grad',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 8,
          user_type: 'member',
          first_name: 'Alford',
          last_name: 'Kirlin',
          user_name: 'alford.kirlin',
          email: 'alford.kirlin@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Kurt&hatColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Skull&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale',
          title: 'Marketing Coordinator',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        },
        {
          id: 9,
          user_type: 'member',
          first_name: 'Titus',
          last_name: 'Pfannerstill',
          user_name: 'titus.pfannerstill',
          email: 'titus.pfannerstill@email.email',
          hashed_password: `${bcrypt.hashSync('test')}`,
          profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Blue03&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=Overall&clotheColor=PastelBlue&eyeType=Dizzy&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow',
          title: 'Salesperson',
          short_description: 'Sed molestias ea. Perspiciatis dicta velit quidem ut ad qui eveniet voluptatem hic. Est repellendus sunt et magni.',
          long_description: 'Unde non dolorum quae eum molestias eos reiciendis et. Quis blanditiis necessitatibus ut doloremque eius. Ex necessitatibus cum nemo veniam omnis tempore voluptatem. Velit consequatur quia ducimus eum voluptatem voluptas dolor. Et voluptas quos excepturi ut eos.',
          linkedin_url: 'linkedin.com',
          website_url: 'google.com',
          can_create_session: false
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    });
};
