import showAlert from '../showAlert'
import { AxiosError } from 'axios'
import { ILBAddUser, ILBTeam, YandexApiError } from './types'
import { config, yandexApi } from './yandexApi'

export const addUserToLeaderBoard = async (data: ILBAddUser) => {
  try {
    return await yandexApi.post('/leaderboard', data, config)
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const getAllLeaders = async (data: ILBTeam) => {
  try {
    return await yandexApi.post('/leaderboard/all', data, config)
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const getTeamLeaderboard = async (data: ILBTeam, teamName: string) => {
  try {
    return await yandexApi.post(`/leaderboard/${teamName}`, data, config)
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}
