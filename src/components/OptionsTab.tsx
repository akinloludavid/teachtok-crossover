import { StyleSheet, FlatList, Image,  View, Text, TouchableOpacity, Pressable, PanResponder, Button  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useGetAnswer } from '../api'
import { useQueryClient } from '@tanstack/react-query'
import { useAppContext } from '../context/AppContext'
import { IAppContext } from '../utils/types'

interface IQuestionOption {
    questionData: any
}

export function OptionsTab({ questionData }: IQuestionOption) {
    const {answeredQuestions, setAnsweredQuestions,questionOptions, setQuestionOptions, setQuestionIdx, questionIdx}:IAppContext = useAppContext()
    const queryClient = useQueryClient()
    const [options, setOptions] = useState(questionOptions)
    const [selectedAnswerId, setSelectedAnswerId] = useState('')
    console.log(questionIdx)
    const questionId = questionData?.id
    const question = questionData?.question
    const { data } = useGetAnswer(questionId)

    const handleSelectOption = (optionId: string) => {
        setSelectedAnswerId(optionId)
        const newOptions = questionOptions?.map((el: any) =>
            el.id === optionId ? { ...el, answered: true } : el,
        )
        setQuestionOptions([...newOptions])
        queryClient.invalidateQueries({ queryKey: ['questions'] })

    }
    const correctAnswerId = data?.correct_options[0]?.id

    const revealAnswerBg = (id: string) => {
        if (selectedAnswerId) {
            if (id === correctAnswerId) {
                return 'rgba(40, 177, 143, 0.70)'
            } else if (
                id === selectedAnswerId &&
                selectedAnswerId !== correctAnswerId
            ) {
                return 'rgba(220, 95, 95, 0.70)'
            } else {
                return 'rgba(255, 255, 255, 0.50)'
            }
        } else {
            return 'rgba(255, 255, 255, 0.50)'
        }
    }

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {

                //swipe up
                if (gestureState.dy < 0) {
                    if(questionIdx < answeredQuestions.length -1){
                        setQuestionIdx(questionIdx + 1)
                        setSelectedAnswerId('')
                    }
                }
                //swipe down
                if (gestureState.dy > 50) {
                    // setSelectedAnswerId('')
                    // setQuestionIdx(questionIdx - 1)

                }
            },
            onPanResponderRelease: () => {
                setQuestionIdx(questionIdx+1)
                setSelectedAnswerId('')
                // setOptions(questionOptions)
                // setSelectedAnswerId('')
                // queryClient.invalidateQueries({ queryKey: ['questions'] })
            },
        }),
    ).current
    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <View style={styles.question_wrapper}>
                <Text style={styles.question_text}>{question}</Text>
            </View>
            <Button title='click' onPress={()=> setQuestionIdx(questionIdx+1)} />
            <View>
                <FlatList
                    data={questionOptions}
                    extraData={questionOptions}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => handleSelectOption(item.id)}
                            style={{
                                ...styles.options_wrapper,
                                backgroundColor: revealAnswerBg(item.id),
                            }}
                            disabled={selectedAnswerId !== ''}
                        >
                            <Text style={styles.option}>{item.answer}</Text>
                            {item.id === selectedAnswerId &&
                                item.id === correctAnswerId && (
                                    <Image
                                        source={{
                                            uri: 'https://s3-alpha-sig.figma.com/img/cda0/ce7c/9fc0298f1a47d3a7a045c1311202ac2c?Expires=1701648000&Signature=IBRazcTy6nMsTXTPZIY0tQ3CyH5NqIl278AW~xBuqpikEZYRw7vU57cQ1c4NrGd00ZWb5Xh2grwCZVSoAr0gGnIho9EiJH4DFUNkMV05Q4pDeo7HxietVyoq4ti5EhyFPV~729V7j22CK-pMC7gX1OdQSKgLi5nY-8Eihf6lwp3mDkm5hSDOhvZUYgH06W-3rKd3agfFUrH3tqKGkK~D7vA6aNAsQxjQ-eFWw7jaJbKw2mj4aO6dTVYa6K8G-2CWq-oeL-CbpyqY9~4479hoR2NGSjuMp2~QgwLLJTdF~2zzwbjroyLw8CJNVKPuMawqV3k3d3PopFfu8WsY2ZfHgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                                        }}
                                        style={styles.correct_gif}
                                    />
                                )}
                            {item.id === selectedAnswerId && item.id !== correctAnswerId &&<Image
                                source={{
                                    uri: 'https://s3-alpha-sig.figma.com/img/0b81/5c65/ba4ffcacaa979db7ee513dc004374c7f?Expires=1701648000&Signature=Mv3lkhBJZ04ey5lS8UNLKZk6orNiqz3q6FqLgplOWaTMjSBdGcIBwwow0MEiOCiyqVpAA87iaiaX6cpJI7ohFhh7o2406pq0E593qJPqRveM-jvtuEeyxrNvAgKSP50ajX8NuGWUdpMDkx4yL1o3yxdvrH58ezU-0XUNrkyjAdFv~AzBdOlxgj0FqBNpJ5i3qr08Wox4FQW33dioJ8qWc3HF3t4kEr8fO59O-~ad-ppbs-KA9nALig9mVWhuyT18NdeYaqT50t3t9vAmbGR7Nc-1c0J5Nnhbnp~ViUtKaHblXs-jrOTJWYi0nLJ-FZpZxu8JtuM-gO-yf-IEWVl-oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                                }}
                                style={styles.incorrect_gif}
                            />}
                        </Pressable>
                    )}
                    keyExtractor={item => item.answer}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '85%',
        flex: 1,
        marginBottom: 16,
        paddingTop: 40,
    },
    question_wrapper: {
        padding: 6,
        backgroundColor: '#00000099',
        borderRadius: 4,
    },
    question_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
    },
    correct_gif: {
        width: 40,
        height: 40,
        marginTop: -14,
    },
    incorrect_gif: {
        width: 40,
        height: 40,
        marginBottom: -14,
        transform: 'rotate(180deg)',
    },
    options_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    option: {
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: {width: 1, height: 1.5},
        textShadowRadius: 2,
        fontWeight: '500',
        maxWidth:'90%'
    },
})
