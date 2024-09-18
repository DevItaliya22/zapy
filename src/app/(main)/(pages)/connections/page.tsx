import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { CONNECTIONS } from "@/lib/constants";
import { Connection } from "@/lib/types";
import ConnectionCard from "./_components/ConnectionCard";

const Connections = async () => {
  const user = await currentUser();
  if (!user) return null;
  const connections : {} & any = {};
  
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6 text-muted-foreground">
        Connect all your apps directly from here. You may need to connect these apps regularly to refresh verification
        <div className="flex flex-wrap gap-4">
          {CONNECTIONS.map((connection: Connection, idx: number) => (
            <div className="w-[35vw] flex-grow" key={idx}>
              <ConnectionCard
                description={connection.description}
                title={connection.title}
                icon={connection.image}
                type={connection.title}
                connected={connections}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Connections;

