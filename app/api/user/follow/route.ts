// app/api/user/follow/route.ts

import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Adjust the import based on your project structure

// Follow a user
export async function POST(req: Request) {
  const { followerId, followingId } = await req.json();

  // Check if the follower and following users exist
  const follower = await db.user.findUnique({ where: { id: followerId } });
  const following = await db.user.findUnique({ where: { id: followingId } });

  if (!follower || !following) {
    return NextResponse.json({ status: 404, message: "User not found." });
  }

  // Create a follow relationship
  const follow = await db.follow.create({
    data: {
      follower: { connect: { id: followerId } },
      following: { connect: { id: followingId } },
    },
  });

  return NextResponse.json({ status: 200, follow });
}

// Get followers and following
export async function GET(req: Request) {
  const { userId } = await req.json(); // Ensure userId is extracted correctly

  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      followers: {
        include: {
          follower: true, // Include follower details
        },
      },
      following: {
        include: {
          following: true, // Include following details
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ status: 404, message: "User not found." });
  }

  // Extract followers and following from the follow relationships
  const followersList = user.followers.map((follow) => follow.follower);
  const followingList = user.following.map((follow) => follow.following);

  return NextResponse.json({
    status: 200,
    followers: followersList,
    following: followingList,
  });
}

// Unfollow a user
export async function DELETE(req: Request) {
  const { followerId, followingId } = await req.json();

  // Check if the follow relationship exists
  const follow = await db.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });

  if (!follow) {
    return NextResponse.json({
      status: 404,
      message: "Follow relationship not found.",
    });
  }

  // Delete the follow relationship
  await db.follow.delete({
    where: {
      id: follow.id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Unfollowed successfully.",
  });
}
