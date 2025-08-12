export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      await navigateTo('/')
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  const isAdmin = computed(() => {
    // Add your admin role logic here
    // This is a simple example - you might check user metadata or roles
    return user.value?.email?.includes('@admin.') || false
  })

  return {
    user: readonly(user),
    signIn,
    signOut,
    isAdmin: readonly(isAdmin)
  }
}