import { PersonalProject } from '@/types';

export const projects: PersonalProject[] = [
	{
		name: 'Video Game Library',
		description:
			'A web app that provides access to a vast library of video games, with information on everything from the latest releases to classic titles. The app uses the RAWG API to deliver accurate and up-to-date data.',
		images: ['https://raw.githubusercontent.com/m-ler/video-game-library/main/.github/assets/vgl-banner.png'],
		stack: ['JavaScript', 'React', 'Redux Toolkit', 'Tailwind CSS', 'Firebase'],
		githubLink: 'https://github.com/m-ler/video-game-library',
		previewLink: 'https://vglibrary.web.app/games',
	},
	{
		name: 'Candy Tiles',
		description: 'A match-three video game, where players can create and share their own levels with the community.',
		images: [
			'https://raw.githubusercontent.com/m-ler/candy-tiles/master/.github/assets/social-banner.jpg',
			'https://raw.githubusercontent.com/m-ler/video-game-library/main/.github/assets/vgl-banner.png',
			'https://raw.githubusercontent.com/m-ler/trivia-time/main/public/img/app-banner.png',
		],
		stack: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'MUI', 'Supabase', 'Netlify', 'Cypress', 'Recoil'],
		githubLink: 'https://github.com/m-ler/candy-tiles',
		previewLink: 'https://candy-tiles.netlify.app/',
	},
	{
		name: 'Trivia Time!',
		description:
			'A full-stack web application. Play AI-generated trivias about different topics such as art, entertainment, geography, history and science.',
		images: [
			'https://raw.githubusercontent.com/m-ler/trivia-time/main/public/img/app-banner.png',
			'https://raw.githubusercontent.com/m-ler/youtube-clone/main/public/img/banner.png',
		],
		stack: ['Next.js', 'Chakra UI', 'Supabase', 'Prisma', 'React Hook Form', 'Zustand', 'NextAuth.js', 'React Email'],
		githubLink: 'https://github.com/m-ler/trivia-time',
		previewLink: 'https://triviatime.vercel.app/',
	},
	{
		name: 'YouTube Clone',
		description: 'A Youtube web application clone build with Next.js app directory and powered by the YouTube Data API v3.',
		images: ['https://raw.githubusercontent.com/m-ler/youtube-clone/main/public/img/banner.png'],
		stack: ['Next.js', 'TypeScript', 'MUI', 'Zustand'],
		githubLink: 'https://github.com/m-ler/youtube-clone',
		previewLink: 'https://youtube-next-js.vercel.app/',
	},
];
