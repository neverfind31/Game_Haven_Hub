import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../components/AppButton';

const QuizApp = () => {
  const dummyQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null); // Reset selected answer for the previous question
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <LinearGradient
      colors={['#A5CDE8', '#ffffff']}
      style={{
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#e71616',
      }}>
      <View style={styles.container}>

        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={styles.questionText}>{dummyQuestions[currentQuestionIndex].question}</Text>

          {dummyQuestions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text
                style={{
                  color: selectedAnswer === option ? 'white' : 'black',
                  fontWeight: '700',
                  fontSize: 14
                }}
              >{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={handlePrev}
            disabled={currentQuestionIndex === 0}
            text={'Prev'}
          />
          <AppButton
            onPress={handleNext}
            disabled={currentQuestionIndex === dummyQuestions.length - 1}
            text={'Next'}
          />
        </View>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    paddingHorizontal: '20%',
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#17A589',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
});

export default QuizApp;
