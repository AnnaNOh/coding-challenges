# Problem:
# Write a numbers class that supports the following functions on a collection of integers.
# * void append(value)
# * int get(index)
# * void addToAll(value)
# * void multiplyByAll(value)
#
# Example:
# append(2)
# append(3)
# append(4)
# get(0) // 2
# get(2) // 4
# addToAll(3)
# get(1) // 6
# multiplyByAll(2)
# get(2) // 14
#
# Brainstorm:
# [2,3]
# +3  5		6
# *2  10  	12
# +4  14  	16
# *2  28	32
#
# +7 *4
#
# @changes = 1 or 0
# @changes = ((n + 3) *2)
#
# (((n + 3) * 2) + 6)
# 2n + 6 + 6
# 2n + 12
#
# @addBy = 3 * 2 => 6 => 12
# @multiplyBy = 2
#

class NumbersCollection
	attr_reader :store, :addBy, :multiplyBy

	def initialize()
		@store = []
		@addBy = 0
		@multiplyBy = 1
	end

	def append(newNum)
		@store << (newNum - @addBy) / @multiplyBy
	end

	def get(index)
		return @store[index] * @multiplyBy + @addBy
	end

	def addtoAll(value)
    @addBy += value
	end

  def multiplyByAll(value)
		@addBy = @addBy * value
		@multiplyBy = @multiplyBy * value
	end

end



# append(1) // @store = [1]
# get(0)    // return 1
# addToAll(1) // @addBy = 1
# multiplyByAll(2)
#
# @addBy = 1
# @multiplyBy = 2
# append(1)   // @store = [1, 1]
# 			@store = [	1 =>  	startAddBy = 0
# 							startmultiplyBy = 0, => 4
# 					 => 		startAddBy = 2
# 							startmultiplyBy = 2 => 1
#
# @store = [1, -1/2]
# @addBy = ?2
# @multiplyBy = ?2
# get(1) // ? want 1
#
# Return @store[index] * @multiplyBy + @addBy
# Append = -addBy then divide by multiplyBy
