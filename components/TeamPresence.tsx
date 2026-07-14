"use client";

import Image from "next/image";
import { Users, UserRound } from "lucide-react";
import { brandAssets, teamMembers } from "@/lib/data";

function EmptyProfileAvatar({
  size = "sm",
  title,
}: {
  size?: "sm" | "md";
  title?: string;
}) {
  const dim = size === "sm" ? "w-9 h-9" : "w-11 h-11";
  const icon = size === "sm" ? 16 : 20;

  return (
    <div
      className={`${dim} rounded-full border-2 border-background bg-surface-alt flex items-center justify-center text-muted shadow-card`}
      title={title}
      aria-hidden={!title}
    >
      <UserRound size={icon} strokeWidth={1.75} className="opacity-70" />
    </div>
  );
}

/** Compact avatar stack for Hero / trust areas */
export function TeamAvatarStack({ className = "" }: { className?: string }) {
  const avatars = teamMembers.slice(0, 4);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2.5">
        {avatars.map((member, i) =>
          member.isLead ? (
            <div
              key={member.id}
              className="relative w-9 h-9 rounded-full border-2 border-background overflow-hidden bg-surface shadow-card"
              style={{ zIndex: avatars.length - i }}
              title={`${member.name} · ${member.role}`}
            >
              <Image
                src={brandAssets.profilePicture}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
          ) : (
            <div key={member.id} style={{ zIndex: avatars.length - i }}>
              <EmptyProfileAvatar title={member.role} />
            </div>
          )
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground leading-tight">
          ARSHMANDEV team
        </p>
        <p className="text-xs text-muted leading-tight mt-0.5">
          Lead engineer + specialist roles
        </p>
      </div>
    </div>
  );
}

/** Full team panel for About */
export function TeamPanel() {
  return (
    <div className="pt-8 mt-2 border-t border-border-subtle">
      <div className="flex items-center gap-2 mb-5">
        <Users size={16} className="text-primary" />
        <p className="label-mono text-muted">The team behind delivery</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`flex items-start gap-3 rounded-xl border border-border-subtle bg-surface/80 p-3.5 ${
              member.isLead
                ? "sm:col-span-2 border-primary/20 bg-primary/[0.04]"
                : ""
            }`}
          >
            {member.isLead ? (
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-primary/30 shrink-0">
                <Image
                  src={brandAssets.profilePicture}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="44px"
                />
              </div>
            ) : (
              <div className="shrink-0">
                <EmptyProfileAvatar size="md" title={member.role} />
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground tracking-tight">
                {member.isLead ? member.name : member.role}
              </p>
              <p className="text-xs text-primary mt-0.5">
                {member.isLead ? member.role : member.name}
              </p>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                {member.focus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
