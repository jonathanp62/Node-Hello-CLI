#!/usr/bin/env bash

# @(#)run.sh	1.0.0	08/12/2023
#
# Copyright (c) Jonathan M. Parker
# 324 Lantana Drive
# Owings Mills, MD 21117 U.S.A.
# All Rights Reserved.
#
# @author       Jonathan Parker
# @since        1.0.0
# @version      1.0.0
#
# Usage:
#       run.sh

APP_HOME=${HOME}/Node-Projects/Hello-CLI/hello-cli

if cd ${APP_HOME}
then
  node --no-warnings src $@
else
  echo "Failed to change to ${APP_HOME}."
  exit 1
fi
