import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { validateUserPermissions } from "../utils/validateUserPermissions"

type UseCanParams = {
  permissions?: string[]
  roles?: string[]
}

export function useCan({ permissions, roles}: UseCanParams) {
  const { user, isAuthenticaded } = useContext(AuthContext)

  if (!isAuthenticaded) {
    return false;
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions
}