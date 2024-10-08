"use client"
import { Button } from "@/components/ui/button"
import { useModal } from "@/providers/modal-provider"
import { Plus } from "lucide-react"
import CustomModal from "./CustomModal";
import Workflowform from "@/components/forms/workflow-form";


type Props = {}

function WorkFlowButton({}: Props) {
    const {setOpen,setClose} = useModal();
    const handleClick = () => {
        setOpen(
          <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks."
          >
            <Workflowform />
          </CustomModal>
        )
      }

  return (
    <Button size="icon" onClick={handleClick}>
        <Plus></Plus>
    </Button>
  )
}

export default WorkFlowButton