import react from './ImagesSkills/react.webp'
import sol from './ImagesSkills/sol.webp'
import type from './ImagesSkills/type.webp'
import vue from './ImagesSkills/vue.webp'
import ionic from './ImagesSkills/Ionic_Logo.svg.webp'

const projects = [
	{
		name: 'Hybrid Gallery App',
		description:
			"A cross-platform app to capture photos using the device's native camera, save them locally, and display them in a gallery. Built with Ionic and Vue.js, it uses Capacitor plugins for native functionality.",
		skills_used: [vue, ionic, type],
		link: 'https://github.com/roviralta/IonicApp-STW',
	},
	{
		name: 'Hybrid Voting App with Blockchain',
		description:
			'A secure, decentralized voting app where users can cast votes in elections using blockchain technology. Built with Ionic and React for the frontend, and Solidity smart contracts on Ethereum for vote integrity.',
		skills_used: [react, ionic, sol, type],
		link: 'https://github.com/roviralta/vottingApp/tree/master',
	},
]

export { projects }
