'use client';
import { createContext, useContext, useState } from 'react'

export type ConnectionProviderProps = {
  // This type have 6 things , discordNode, googleNode, notionNode, slackNode, workflowTemplate and isLoading
  // and all of them are objects and have some properties 
  // and also there are some set functions for each of them

  discordNode: {
    webhookURL: string
    content: string
    webhookName: string
    guildName: string
  };
  setDiscordNode: React.Dispatch<React.SetStateAction<any>>;

  googleNode: {}[];
  setGoogleNode: React.Dispatch<React.SetStateAction<any>>;

  notionNode: {
    accessToken: string
    databaseId: string
    workspaceName: string
    content: ''
  };
  setNotionNode: React.Dispatch<React.SetStateAction<any>>;

  slackNode: {
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    content: string
  };
  setSlackNode: React.Dispatch<React.SetStateAction<any>>;
    
  workflowTemplate: {
    discord?: string
    notion?: string
    slack?: string
  };
  setWorkFlowTemplate: React.Dispatch<
    React.SetStateAction<{
      discord?: string
      notion?: string
      slack?: string
    }>
  >

  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type ConnectionWithChildProps = {
  children: React.ReactNode
}

const InitialValues: ConnectionProviderProps = {
  // Initial values for the connection provider type
  discordNode: {
    webhookURL: '',
    content: '',
    webhookName: '',
    guildName: '',
  },
  googleNode: [],
  notionNode: {
    accessToken: '',
    databaseId: '',
    workspaceName: '',
    content: '',
  },
  workflowTemplate: {
    discord: '',
    notion: '',
    slack: '',
  },
  slackNode: {
    appId: '',
    authedUserId: '',
    authedUserToken: '',
    slackAccessToken: '',
    botUserId: '',
    teamId: '',
    teamName: '',
    content: '',
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setIsLoading: () => undefined,
  setWorkFlowTemplate: () => undefined,
}

// we create context for the connection provider initial values
// The createContext function is used to create a Context object. When you call createContext, it returns an object with two main properties:
// Provider: A React component that allows consuming components to subscribe to context changes.
// Consumer: A React component that subscribes to context changes. It allows you to use the context value within a function as a child.
const ConnectionsContext = createContext(InitialValues)
const { Provider } = ConnectionsContext

export const ConnectionsProvider = ({ children }: ConnectionWithChildProps) => {
  // here reducers are not used , instead we are using useState to set the values of the connection provider
  // basically reducers are used to update the state of the component
  // and useState is used to set the state of the component by default
  const [discordNode, setDiscordNode] = useState(InitialValues.discordNode)
  const [googleNode, setGoogleNode] = useState(InitialValues.googleNode)
  const [notionNode, setNotionNode] = useState(InitialValues.notionNode)
  const [slackNode, setSlackNode] = useState(InitialValues.slackNode)
  const [isLoading, setIsLoading] = useState(InitialValues.isLoading)
  const [workflowTemplate, setWorkFlowTemplate] = useState(
    InitialValues.workflowTemplate
  )

  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    isLoading,
    setIsLoading,
    workflowTemplate,
    setWorkFlowTemplate,
  }

  return <Provider value={values}>{children}</Provider>
}

export const useNodeConnections = () => {
  const nodeConnection = useContext(ConnectionsContext)
  return { nodeConnection }
}