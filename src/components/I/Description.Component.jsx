import { QuestionForm } from "./QuestionForm.Component"
export const Description = function () {
   const emojis=['🎍','🎋']
   const text=`A place to buy all the plants you've ever wanted ! ${emojis.map(emoji=>emoji).join()}`
   return (
      <div className='jh-description'>
      <QuestionForm/>
      <h3>{text}</h3>
    </div>
   )
}