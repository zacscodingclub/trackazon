class User < ApplicationRecord
  validate :first_name, presence: true
  validate :last_name, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :trackable, :validatable

  def full_name
    "#{first_name} #{last_name}"
  end
end
