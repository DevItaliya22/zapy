'use server'

import db  from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { Client } from '@notionhq/client'

export const onNotionConnect = async (
  access_token: string,
  workspace_id: string,
  workspace_icon: string,
  workspace_name: string,
  database_id: string,
  id: string
) => {
  'use server'
  if (access_token) {
    //check if notion is connected
    const notion_connected = await db.notion.findFirst({
      where: {
        accessToken: access_token,
      },
      include: {
        connections: {
          select: {
            type: true,
          },
        },
      },
    })

    if (!notion_connected) {
      //create connection
      await db.notion.create({
        data: {
          userId: id,
          workspaceIcon: workspace_icon!,
          accessToken: access_token,
          workspaceId: workspace_id!,
          workspaceName: workspace_name!,
          databaseId: database_id,
          connections: {
            create: {
              userId: id,
              type: 'Notion',
            },
          },
        },
      })
    }
  }
}
export const getNotionConnection = async () => {
  const user = await currentUser()
  if (user) {
    const connection = await db.notion.findFirst({
      where: {
        userId: user.id,
      },
    })
    if (connection) {
      return connection
    }
  }
}

export const getNotionDatabase = async (
  databaseId: string,
  accessToken: string
) => {
  const notion = new Client({
    auth: accessToken,
  })
  const response = await notion.databases.retrieve({ database_id: databaseId })
  // console.log(response)
  return response
}
// {
//   object: 'database',
//   id: '6a898058-8c3f-4229-84bd-159e46f44498',
//   cover: null,
//   icon: null,
//   created_time: '2024-09-19T18:32:00.000Z',
//   created_by: { object: 'user', id: '0a89c43b-e171-4b8f-a66d-dfe48a1a7ef1' },
//   last_edited_by: { object: 'user', id: '0a89c43b-e171-4b8f-a66d-dfe48a1a7ef1' },
//   last_edited_time: '2024-09-19T18:32:00.000Z',
//   title: [],
//   description: [],
//   is_inline: true,
//   properties: {
//     Tags: {
//       id: 'lWWc',
//       name: 'Tags',
//       type: 'multi_select',
//       multi_select: [Object]
//     },
//     Name: { id: 'title', name: 'Name', type: 'title', title: {} }
//   },
//   parent: { type: 'page_id', page_id: '1061129b-b3cc-808a-b0f2-f7a1492ccea2' },
//   url: 'https://www.notion.so/6a8980588c3f422984bd159e46f44498',
//   public_url: null,
//   archived: false,
//   in_trash: false,
//   request_id: '715d978d-fc5c-41ee-9405-d9328a908c01'
// }

export const onCreateNewPageInDatabase = async (
  databaseId: string,
  accessToken: string,
  content: string
) => {
  const notion = new Client({
    auth: accessToken,
  });

  const response = await notion.pages.create({
    parent: {
      type: 'database_id',
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              // WIP :content should be a string
              content: content,
            },
          },
        ],
      },
    },
  });
  console.log(response);
  return response;
};

