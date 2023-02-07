import {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Card } from './App.styled';
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";




export function App  () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const addFeedback = feedbackName => {
  switch (feedbackName) {
    case 'good':
      setGood (state => state +1);
      break;
    case 'neutral':
      setNeutral (state => state +1);
      break;
    case 'bad':
      setBad (state => state +1);
      break;
    default:
      break;
  }
}

const feedbackTypes = {good, neutral, bad};


const countTotalFeedback = () => {
  return Object.values(feedbackTypes).reduce((total, num) => total + num, 0)
}


const countPositiveFeedbackPercentage = () => {
    return ((`${good}` * 100 /(countTotalFeedback())).toFixed(2))
};

return (
        <Card>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    onLeaveFeedback={addFeedback}             
                    good={good}
                    neutral={neutral}
                    bad={bad}
                />
            </Section>

            <Section title="Statisticks"> 
                {countTotalFeedback() === 0 
                    ? (<Notification message="There is no feedback">  </Notification>) 
                    : (<Statistics 
                          good={good} 
                          neutral={neutral} 
                          bad={bad} 
                          total={countTotalFeedback()} 
                          positivePercentage={countPositiveFeedbackPercentage()}/>
                      )
                }
            </Section>

          </Card>
        )
      
}