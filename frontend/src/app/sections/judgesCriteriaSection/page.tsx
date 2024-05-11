import { cabinetExtraBold, cabinetRegular } from '@/app/utils/fonts'
import React from 'react'

const page = () => {
  return (
    <div className={`${cabinetRegular.className} md:text-lg `}>
    <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-24 pt-32 `}>Judging Criteria</h1>
    <div className="flex flex-col text-white md:px-24 px-10 text-wrap">
    <h2 className={`text-3xl headings  ${cabinetExtraBold.className} mb-5`}>Innovation</h2>
        <p className="leading-9 mb-3">
          The project is primarily marked on its creativity and uniqueness, as these elements serve as the cornerstone of innovation. How the end-result properly justifies the technologies used in the project heavily decides the marking for innovation, demonstrating not only a mastery of tools but also a deep understanding of their application to solve real-world problems. 
        </p>
        <p className="leading-9 mb-10">
          The project is primarily marked on its creativity and uniqueness, as these elements serve as the cornerstone of innovation. How the end-result properly justifies the technologies used in the project heavily decides the marking for innovation, demonstrating not only a mastery of tools but also a deep understanding of their application to solve real-world problems. 
        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Functionality</h2>
        <p className="leading-9 mb-3">
        The robust functionality of the project serves as a testament to the thoroughness and sophistication of its development process. This emphasis on integration not only enhances the project's capabilities but also signifies a deep understanding of modern technological ecosystems and the importance of interoperability.
        </p>
        <p className="mb-10 leading-9">
        Moreover, the project's commitment to data protection through the implementation of various security measures underscores its dedication to safeguarding sensitive information, reflecting a proactive approach to privacy and compliance standards. Additionally, the emphasis on cross-platform compatibility further enhances the project's comprehensiveness, ensuring that it can be accessed and utilized seamlessly across a diverse range of devices and environments, thereby maximizing its reach and impact.        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Scalability</h2>
        <p className="leading-9 mb-3">
        The consistency of the user interface across multiple screens is crucial and serves as a focal point for marks distribution, highlighting the importance of seamless navigation and user experience cohesion. Moreover, the ease of access and the provision of personalized user screens are additional factors that contribute to the overall excellence of the project, emphasizing the significance of user-centric design and tailored experiences. 
        </p>
        <p className="mb-10 leading-9">
        The consistency of the user interface across multiple screens is crucial and serves as a focal point for marks distribution, highlighting the importance of seamless navigation and user experience cohesion. Moreover, the ease of access and the provision of personalized user screens are additional factors that contribute to the overall excellence of the project, emphasizing the significance of user-centric design and tailored experiences. 
        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Impact Potential</h2>
        <p className="leading-9 mb-3">
        Enabling long-term sustainability entails a multifaceted evaluation from social, environmental, and economic perspectives, emphasizing the project's responsibility and impact beyond immediate implementation. This holistic approach underscores the importance of considering broader societal implications, environmental footprints, and economic viability in the project's design and implementation phases, ensuring that it aligns with sustainable development goals and fosters positive long-term outcomes.
        </p>
        <p className="leading-9 mb-10">
        Furthermore, evaluating the potential for scalability involves a thorough assessment of whether the solution can efficiently accommodate larger user bases or be adapted to different contexts, highlighting its capacity to grow and evolve in tandem with changing needs and demands. By maximizing its reach and impact through scalable design principles, the project can effectively address emerging challenges and contribute to sustainable development goals on a global scale.        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Presentation</h2>
        <p className="leading-9 mb-3">
        The effectiveness of a project often hinges on its presentation. Proper visuals, including well-crafted slides, compelling demos, and functional prototypes, play a pivotal role in bolstering the overall appeal and selling points of the project. These visual elements not only enhance comprehension but also captivate the audience's attention, fostering engagement and enthusiasm throughout the presentation.        </p>
        <p className="leading-9 mb-10">
        Moreover, they serve as tangible manifestations of the project's potential, offering concrete evidence of its value proposition and capabilities. By leveraging such visual aids, presenters can articulate their arguments with greater clarity and conviction, leaving a lasting impression on stakeholders and judges alike. Ultimately, the quality of the presentation can significantly influence the project's reception and ultimate success, underscoring the importance of meticulous preparation and attention to detail in visual storytelling.
          </p>
    </div>

  </div>
  )
}

export default page