"use server"
import db from "@/lib/db";

export const onCreateNodesEdges = async(flowId:string, nodes:string , edges:string,flowPath:string) =>{
    const flow = await db.workflows.update({
        where : {
            id:flowId
        },
        data : {
            nodes ,
            flowPath ,
            edges
        }
    })

    if(flow) return {message : "flow saved"}
    return {message : "Error creating / saving flow['"}
}

export const onFlowPublish = async(id : string , publish : boolean ) => {
    try {
        const published = await db.workflows.update({
            where:{
                id
            },
            data : {
                publish
            }
        })

        if(published.publish) return "Workflow published (true)"
        return "Workflow unpublish (false)"
    } catch (error) {
        console.log(error)
    }
}